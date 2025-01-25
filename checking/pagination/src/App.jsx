import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10); // Fixed number of posts per page

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading Data...</p>;
  }

  // Pagination logic
  const lastPost = currentPage * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPosts = data.slice(firstPost, lastPost);
  const totalPage = Math.ceil(data.length / postPerPage);
  console.log(totalPage)
  const handleFirst = () => setCurrentPage(1);
  const handlePrev = () =>
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  const handleNext = () =>
    setCurrentPage((prev) => (prev < totalPage ? prev + 1 : prev));
  const handleLast = () => setCurrentPage(totalPage);

  return (
    <div>
      <ul>
        {currentPosts.length > 0 ? (
          currentPosts.map((item) => (
            <li key={item.id}>
              {item.id} - {item.title}
            </li>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </ul>

      <div className="pagination">
        <button onClick={handleFirst} disabled={currentPage === 1}>
          First
        </button>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPage}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPage}>
          Next
        </button>
        <button onClick={handleLast} disabled={currentPage === totalPage}>
          Last
        </button>
      </div>
    </div>
  );
};

export default App;
