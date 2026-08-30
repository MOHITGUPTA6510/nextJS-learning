export async function getPosts(){
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            next :{
                revalidate : 60
            }
        }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch posts");
    }

    const data = await response.json();

    return data;
}

export async function getPostBySlug(slug) {
    const posts = await getPosts();

    const data = posts.find((post) => {
        return post.title.toLowerCase().replaceAll(" ", "-") === slug;
    });

    return data;
}