import { useEffect,useState  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/modules/posts";
import type { RootState, AppDispatch } from "../redux/config/configStore";

function Sub1 () {
    const dispatch = useDispatch<AppDispatch>();
  const { posts, loading, error } = useSelector((state: RootState) => state.posts);

   const [visibleCount, setVisibleCount] = useState(16); // 처음 12개만 표시

  useEffect(() => {
    dispatch(fetchPosts());
        }, [dispatch]);
        console.log(posts);

          // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        // 맨 아래 근처에 도달하면
        setVisibleCount(prev => Math.min(prev + 5, posts.length)); // 5개씩 추가, 최대 posts.length
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [posts]);

  if (loading) return <p>로딩중...</p>;
  if (error) return <p>{error}</p>;

    const filteredPosts = posts.filter(item => item.id % 2 === 0).slice(0, visibleCount);
    return(
        <>
            <ul>
                 {filteredPosts.length > 0 ? (
                        filteredPosts.map(item => (
                        <li key={item.id}>
                            <p>{item.id}</p>
                            <h2>{item.title}</h2>
                            <br /><br />
                            <p>{item.body}</p>
                        </li>
                        ))
                    ) : (
                        <li>데이터가 없습니다.</li>
                    )}
            </ul>
        </>
    )
}


export default Sub1