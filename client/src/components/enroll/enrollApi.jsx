export async function AddtoEnroll(item) {
  try {
    const response = await fetch('https://opensource-server-8rg2ihsf6-sunil-dondeys-projects.vercel.app/enroll', {
      method: "POST",
      body: JSON.stringify(item),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    return { data };
  } catch (error) {
    console.error("Error in AddtoEnroll:", error);
    return { error };
  }
}

export async function fetchItemsByUserId(userId) {
  try {
    const response = await fetch(`https://opensource-server-8rg2ihsf6-sunil-dondeys-projects.vercel.app/enroll/${userId}`);
    const data = await response.json();
    return { data };
  } catch (error) {
    console.error("Error in fetchItemsByUserId:", error);
    return { error };
  }
}


export async function deleteItemFromEnroll(userId,courseId) {
  try {
    const response = await fetch(`https://opensource-server-8rg2ihsf6-sunil-dondeys-projects.vercel.app/enroll/${userId}/${courseId}`,
      {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    return { data: { user : userId , course : courseId } };
  } catch (error) {
    console.error("Error in deleteItemFromEnroll:", error);
    return { error };
  }
}

export async function resetEnroll(userId) {
  try {
    const response = await fetchItemsByUserId(userId);
    const items = response.data;
    for (let item of items) {
      await deleteItemFromEnroll(item.id);
    }
    return { status: 'success' };
  } catch (error) {
    console.error("Error in resetEnroll:", error);
    return { error };
  }
}
