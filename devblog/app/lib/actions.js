"use server";

export async function addComment(formData) {
  const name = formData.get("name");
  const comment = formData.get("comment");

  console.log("Name:", name);
  console.log("Comment:", comment);
}