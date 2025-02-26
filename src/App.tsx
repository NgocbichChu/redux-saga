import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListPostRequest } from "./redux/slice";
import { useSelector } from 'react-redux';
import Card from "./components/Card";


const App = () => {
  const dispatch = useDispatch();
  const listPost = useSelector((state: { listPost: any }) => state.listPost);
  useEffect(() => {
    dispatch(getListPostRequest({}));
  }, [dispatch]);

  return (
    <div className="p-3">
      <div className="row">
        {listPost.map((post: any) => (
          <div className="col-md-3 col-12">
            <Card key={post.id} id={post.id} title={post.title} body={post.body} />
          </div>

        ))}
      </div>
    </div>
  )
}

export default App