export const bookColumns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "img",
    headerName: "Img",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.cover} alt="avatar" />
        </div>
      );
    },
  },
  { field: "title", headerName: "Title", width: 200 },
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
  },
];
export const userColumns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "picture",
    headerName: "Picture",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.picture} alt="avatar" />
        </div>
      );
    },
  },
  { field: "name", headerName: "Name", width: 200 },
  {
    field: "mail",
    headerName: "Mail",
    width: 100,
  },
  {
    field: "role",
    headerName: "Role",
    width: 100,
  },
  {
    field: "dislike",
    headerName: "Dislike",
    width: 100,
  },
];
