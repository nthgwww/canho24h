import { useEffect} from "react";
import React from "react";
import { Button, Item } from "../../components";
import { 
  //  getPosts,
   getPostsLimit } from "../../store/actions/post";
import { useDispatch, useSelector } from "react-redux";
import  { useSearchParams } from 'react-router-dom';

const List = ({categoryCode}) => {
  console.log(categoryCode)
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    let params = []
    for(let entry of searchParams.entries()){
      params.push(entry)
    }
    let searchParamsObject = {}
    params?.map(i=> {searchParamsObject =  { ...searchParamsObject, [i[0]] : i[1]}})
    if(categoryCode) searchParamsObject.categoryCode = categoryCode    
    console.log(searchParamsObject)
    dispatch(getPostsLimit(searchParamsObject));
    // return searchParamsObject
    // let page = searchParams.get('page')
  }, [searchParams, categoryCode]);
  // console.log(posts)
  return (
    <div className="w-full p-2 bg-white shadow-md rounded-md px-6">
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-semibold">Danh sách tin đăng</h4>
        <span>Cập nhật 1:07 12/05/2023</span>
      </div>
      <div className="flex items-center gap-1 my-2">
        <span>Sắp xếp:</span>
        <Button bgColor="bg-gray-300" text={"Mặc định"} />
        <Button bgColor="bg-gray-300" text={"Mới nhất"} />
      </div>
      <div className="items">
        {posts?.length > 0 &&
          posts.map((item) => {
            return (
              <Item
                key={item?.id}
                address={item?.address}
                attributes={item?.attributes}
                description={JSON.parse(item?.description)}
                images={JSON.parse(item?.images?.image)}
                star={+item.star}
                title={item?.title}
                user={item?.user}
                id = {item?.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default List;
