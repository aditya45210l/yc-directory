import React from "react";
import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  const posts = [
    {
      _createAt: new Date(),
      views: 55,
      author: { _id: 1 ,name:"aditya"},
      _id: 1,
      description: "this is a description",
      image: "https://i0.wp.com/picjumbo.com/wp-content/uploads/watercolor-backgrounds-images.jpg?w=1024&quality=50",
      category: "robots",
      title: "this is a title",
    },
    {
      _createAt: new Date(),
      views: 55,
      author: { _id: 1 ,name:"aditya"},
      _id: 1,
      description: "this is a description",
      image: "https://i0.wp.com/picjumbo.com/wp-content/uploads/watercolor-backgrounds-images.jpg?w=1024&quality=50",
      catergory: "robots",
      title: "this is a title",
    },
    {
      _createAt: new Date(),
      views: 55,
      author: { _id: 1 ,name:"aditya"},
      _id: 1,
      description: "this is a description",
      image: "https://i0.wp.com/picjumbo.com/wp-content/uploads/watercolor-backgrounds-images.jpg?w=1024&quality=50",
      catergory: "robots",
      title: "this is a title",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect with entrepreneurs.
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : `All Startups`}
        </p>
        <ul className=" mt-7 card_grid">
          {posts && posts.map((post) => <StartupCard key={post._id} post={post} />)}
        </ul>
      </section>
    </>
  );
};
export default Home;
