export const userColumns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "books",
    headerName: "Book",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.cover} alt="avatar" />
          {params.row.title}
        </div>
      );
    },
  },
  {
    field: "views",
    headerName: "Views",
    width: 100,
  },
  {
    field: "like",
    headerName: "Like",
    width: 100,
  }, 
  {
    field: "dislike",
    headerName: "Dislike",
    width: 100,
  }
];
