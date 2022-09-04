import React from "react";
import Spinner from "./Spinner";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import { useEffect } from "react";
import PropTypes from 'prop-types';

function NewsComponent(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  //read about this capitalize logic
  const fetchMore = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let apiHitData = await fetch(url);
    let parsedData = await apiHitData.json();
    setArticles(articles.concat(parsedData.articles));
  };
  //setstate was not working in fetchMore in react class comp same as setPage
  //setPage doesn't work immediately because it is asynchronous fucntion and takes time that's why it was not working before url init.
  const updateNews = async () => {
    props.setProgress(20);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    props.setProgress(40);
    let apiHitData = await fetch(url);
    let parsedData = await apiHitData.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };
  useEffect(() => {
    document.title = `NewsCAT - ${capitalize(props.category)}`;
    updateNews();
    // eslint-disable-next-line
  }, []);
  // read more about async await,promises
  //read more about useEffect 
  // url='https://newsdata.io/api/1/news?country=in&category=top&apiKey=pub_8703fd89db91121c611a0d09a5a91538a3fa&page=1'
  // previousPage= async ()=>{
  //   this.setState({page:this.state.page-1});
  //   this.updateNews();
  // };
  // nextPage= async ()=>{
  //   this.setState({page:this.state.page+1});
  //   this.updateNews();
  // };
  //custom made async await functions should be arrow funcs
  //componentDidMount runs after render function running ends.
  //have to read about async await,promises,componentDidMount
  return (
    <div className={`text-${props.mode==='light'?"dark":"light"} bg-${props.mode==='light'?"light":"dark"}`}>
      <h1 style={{marginTop:"50px",paddingTop:"20px",paddingBottom:"10px"}} className={`text-center`}>
        {`NewsCAT - Top Results In ${capitalize(props.category)}`}{" "}
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMore}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {/* class row- Container for responsive columns*/}
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  {/*class- col-md-number is a used to make column grid*/}
                  <NewsItem mode={props.mode}
                    title={element.title ? element.title.slice(0, 68) : ""}
                    description={
                      element.description
                        ? element.description.slice(0,90)
                        : ""
                    }
                    newsUrl={element.url}
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://www.giftalove.com/blog/wp-content/uploads/2017/12/Banner4.jpg"
                    }
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>

      {/* <div className="container d-flex justify-content-between my-3">
          <button className="btn btn-warning" disabled={this.state.page===1} onClick={this.previousPage}>&larr; Previous</button>
          <button className="btn btn-success " disabled={this.state.page===this.state.totalPages} onClick={this.nextPage}>Next &rarr;</button>
        </div> */}
    </div>
    // map is used for looping through an array/list return an array.
    //read about map,filter,reduce
  );
}

NewsComponent.defaultProps = {
  country: 'in',
  pageSize: 12,
  category: 'general',
}

NewsComponent.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default NewsComponent;
