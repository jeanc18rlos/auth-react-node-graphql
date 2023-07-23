import { useEffect } from "react";
import { useAuth, useGetPosts } from "../../../hooks";
import { Loading } from "../../molecules/notification/Preloader";
import { Toast } from "../../molecules/notification/Toast";

const PostList = ({ posts, loading, error }: any) => {
  if (error) {
    return <Toast message={error.error} />;
  } else if (loading) {
    return <Loading />;
  } else {
    return (
      <ul className="mt-3 divide-y divide-gray-100 border-t border-gray-200">
        {posts &&
          posts.map((post: any) => (
            <li key={post.id}>
              <div className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6">
                <span className="flex items-center space-x-3 truncate">
                  <span
                    className={"w-2.5 h-2.5 flex-shrink-0 rounded-full"}
                    aria-hidden="true"
                  />
                  <span className="truncate text-sm font-medium leading-6">
                    {post.title}
                  </span>
                </span>
              </div>
            </li>
          ))}
      </ul>
    );
  }
};

const WithPostsAndAuth = () => {
  const { getPosts, posts } = useGetPosts();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      getPosts(user.id);
    }
  }, [user]);

  return <PostList {...posts}></PostList>;
};
export default WithPostsAndAuth;
