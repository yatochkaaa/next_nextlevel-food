"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function isInvalidText(text: string) {
  return !text || text.trim() === "";
}

export async function shareMeal(formData: FormData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title as string) ||
    isInvalidText(meal.summary as string) ||
    isInvalidText(meal.instructions as string) ||
    isInvalidText(meal.creator as string) ||
    isInvalidText(meal.creator_email as string) ||
    (meal.creator_email as string).includes("@") ||
    !meal.image ||
    (meal.image as File).size === 0
  ) {
    throw new Error("Invalid input");
  }

  await saveMeal(meal);
  redirect("/meals");
}
