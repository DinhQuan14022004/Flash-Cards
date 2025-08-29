export const flashCards = [
  {
    id: 1,
    question: "React là gì?",
    answer: "React là một thư viện JavaScript để xây dựng giao diện người dùng dựa trên component."
  },
  {
    id: 2,
    question: "JSX trong React là gì?",
    answer: "JSX là cú pháp mở rộng của JavaScript, cho phép viết code giống HTML và có thể nhúng JavaScript."
  },
  {
    id: 3,
    question: "State trong React dùng để làm gì?",
    answer: "State dùng để lưu dữ liệu có thể thay đổi trong suốt vòng đời của component."
  },
  {
    id: 4,
    question: "Sự khác nhau giữa props và state?",
    answer: "Props được truyền từ cha xuống và không thể thay đổi ở con. State là dữ liệu nội bộ, có thể thay đổi bằng setState hoặc useState."
  },
  {
    id: 5,
    question: "useEffect hook dùng để làm gì?",
    answer: "useEffect được dùng để xử lý side effects như gọi API, thao tác DOM, hoặc đồng bộ dữ liệu."
  },
  {
    id: 6,
    question: "RESTful API là gì?",
    answer: "RESTful API là API dựa trên REST, sử dụng các phương thức HTTP như GET, POST, PUT, DELETE để thao tác dữ liệu."
  },
  {
    id: 7,
    question: "TanStack Query (React Query) có tác dụng gì?",
    answer: "TanStack Query giúp quản lý server state, hỗ trợ fetch, cache, đồng bộ và refetch dữ liệu tự động."
  },
  {
    id: 8,
    question: "Khác biệt giữa client state và server state?",
    answer: "Client state là dữ liệu trong ứng dụng (ví dụ modal mở/đóng). Server state đến từ backend và cần đồng bộ với server."
  },
  {
    id: 9,
    question: "Khi nào nên dùng enabled trong useQuery?",
    answer: "Khi muốn query chỉ chạy trong điều kiện nhất định (ví dụ có ID hợp lệ) thay vì chạy ngay khi component render."
  },
  {
    id: 10,
    question: "React Query Devtools dùng để làm gì?",
    answer: "React Query Devtools giúp debug query, quan sát trạng thái (loading, error, success) và cache."
  }
]
