/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import FormField from "../Components/FormField";
import Card from "../Components/Card";
import axios from "axios";

const RanderCard = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

  return (
    <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">{title}</h2>
  );
};

const Home = () => {
  const [loading, setloading] = useState(false);
  const [allPost, setallPost] = useState(null);
  const [searchText, setsearchText] = useState("");
  const [searchResults, setsetsearchResults] = useState(null);
  const [searchTimeout, setsearchTimeout] = useState(null);
  useEffect(() => {
    try {
      setloading(true);
      axios
      .get(`https://rama-api.onrender.com/api/v1/post`)
      .then((data) => {
        setallPost(data.data.data);
      })
      .catch((err) => console.log(err));
    } catch (error) {
      console.log(error) 
    }finally{
      setloading(false);
    }
   
  }, []);

  const handleSearch = (e) => {
    clearTimeout(searchTimeout)
    setsearchText(e.target.value);

    setsearchTimeout( setTimeout(() => {
      const SearchResult = allPost.filter(
        (item) =>
          item.name.toLowerCase().includes(searchText.toLowerCase()) ||
          item.prompt.toLowerCase().includes(searchText.toLowerCase())
      );

      setsetsearchResults(SearchResult);
    }, 500))
   
  };
  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328]  text-[32px]">
          The Community Support
        </h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">
          Brows through a collection of imaginative and visually stunning images
          generated by Rama_Ai
        </p>
      </div>

      <div className="mt-16">
        <FormField 
          Lablename={'Search posts'}
          type={'text'}
          name={'text'}
          placeholder={'Search posts'}
          value={searchText}
          handleChange={handleSearch}
        />
      </div>

      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="text-[#666e75] font-medium text-xl mb-3">
                Showing Result for{" "}
                <span className="text-[#222328]">{searchText}</span>
              </h2>
            )}

            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                <RanderCard data={searchResults} title="no search resultfound" />
              ) : (
                <RanderCard data={allPost} title="No post found" />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;