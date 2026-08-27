
export default async function SlugPost({params}){
    const { slug } = await params;
    return (
        <div>
            <h1>Blog Page</h1>
            <p>Slugs : {slug}</p>
        </div>
    );
}