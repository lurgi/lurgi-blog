export const posts: Record<PostType, PostPreview[]> = {
  Development: [
    {
      type: "Development",
      title: "Paint 이전 Macro Task가 실행될 가능성과 React의 useEffect",
      fileName: "Possibility-of-Macro-Tasks-Being-Executed-Before-Paint-and-React-useEffect",
      date: "2024-11-28",
    },
    {
      type: "Development",
      title: "[Apollo Basic] Apollo Client를 이용하여 Supabase GraphQL 요청 보내기",
      fileName: "Apollo-Basic-Apollo-Client-Using-Supabase-GraphQL-Request",
      date: "2024-11-27",
    },
    {
      type: "Development",
      title: "[Settings] GraphQL과 Supabase, Apollo Client 설정",
      fileName: "GraphQL-and-GraphQL-Apollo-Settings",
      date: "2024-11-26",
    },
    {
      type: "Development",
      title: "옵저버 패턴과 Tanstack Query에서의 옵저버 패턴",
      fileName: "Observer-Pattern-and-the-Use-of-Observer-Pattern-in-TanStack-Query",
      date: "2024-04-08",
    },
  ],

  Insights: [
    {
      type: "Insights",
      title: "용서할 줄 안다는 것",
      fileName: "Knowing-How-to-Forgive",
      date: "2024-08-12",
    },
    {
      type: "Insights",
      title: "낭만을 좇는 것, 낭만이 없다",
      fileName: "Chasing-Romance-No-Romance",
      date: "2024-06-04",
    },
    {
      type: "Insights",
      title: "나 자신을 조금 더 드러내기",
      fileName: "Revealing-Myself-A-Little-More",
      date: "2024-03-26",
    },
  ],

  Reading: [
    {
      type: "Reading",
      title: "자유로부터의 도피 - 에리히 프롬",
      fileName: "Escape-from-Freedom",
      date: "2024-12-09",
    },
    {
      type: "Reading",
      title: "이펙추에이션 - 사라스 사라스바티",
      fileName: "Effectuation-Elements-of-Entrepreneurial-Expertise-Saras-D-Sarasvathy",
      date: "2024-04-20",
    },
  ],
};

export const postTypes = Object.keys(posts) as PostType[];
