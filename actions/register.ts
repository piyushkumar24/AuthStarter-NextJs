"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, name, confirmPassword } = validatedFields.data;

  // Remove confirmPassword from data before storing in database
  const { confirmPassword: _, ...dataToStore } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // Generate verification token and send email in the background
  const successMessage = "Confirmation email sent! Please check your inbox.";
  
  // Return success immediately
  const response = { success: successMessage };
  
  // Send email asynchronously
  generateVerificationToken(email)
    .then(verificationToken => {
      return sendVerificationEmail(
        verificationToken.email,
        verificationToken.token,
      );
    })
    .catch(error => {
      console.error("Failed to send verification email:", error);
    });

  return response;
};
