import { useAuth, useCreatePost } from "../../../../hooks";

const CreatePostForm = ({ createPost, user }: any) => {
  const onSubmit = (e: any) => {
    e.preventDefault();
    createPost(user.id, e.target.title.value);
  };
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Post Title
            </label>
            <div className="mt-1">
              <input
                id="title"
                name="title"
                type="text"
                required
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const WithCreatePostAndAuth = () => {
  const createPost = useCreatePost();
  const { user } = useAuth();

  return <CreatePostForm {...{ createPost, user }} />;
};

export default WithCreatePostAndAuth;
