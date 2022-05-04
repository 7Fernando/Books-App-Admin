import "./bookDetail.scss";

export default function Detail({bookDetails}) {


  return (
    <div className="top">
      <div className="left">
     
        <h1 className="title">Information</h1>
        <div className="item">
          <img src={`${bookDetails?.cover}`} alt="" className="itemImg" />
          <div className="details">
            <h1 className="itemTitle">{bookDetails?.title}</h1>
            <div className="detailItem">
              <span className="itemKey">Author:</span>
              <span className="itemValue">
                {bookDetails?.author?.map((author) => author.name)}
              </span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Views:</span>
              <span className="itemValue">{bookDetails?.views}</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Likes:</span>
              <span className="itemValue">{bookDetails?.like}</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Dislikes:</span>
              <span className="itemValue">{bookDetails?.dislike}</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Epub:</span>
              <span className="itemValue">{bookDetails?.epub}</span>
            </div>
            {
              bookDetails?.topic && (
            <div className="detailItem">
              <span className="itemKey">Topics:</span>
              <span className="itemValue">
                {bookDetails?.topic?.map((lan) => lan.name)}
              </span>
            </div>
              )
            }
            


            {
              bookDetails?.language && (
            <div className="detailItem">
              <span className="itemKey">Language:</span>
              <span className="itemValue">
                {bookDetails?.language?.map((lan) => lan.name)}
              </span>
            </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}
