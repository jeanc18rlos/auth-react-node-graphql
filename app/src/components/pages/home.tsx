import { useAuth } from "../../hooks";
import PostList from "../organisms/lists/PostsList";
import CreatePostForm from "../organisms/form/CreatePostForm";
import { H2 } from "../atoms/typography/headings";
import { Header } from "../organisms/layout/Header";

export default function Example() {
  const auth = useAuth();
  return (
    <>
      <div className="min-h-full">
        <div className="flex flex-col">
          {/* Search header */}
          <Header email={auth.user.email} />
          <main className="flex-1">
            <div className="mt-10 ">
              <div className="px-4 sm:px-6">
                <H2>Create Posts</H2>
              </div>
              <CreatePostForm />
              <div className="px-4 sm:px-6">
                <H2>My Posts</H2>
              </div>
              <PostList />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
