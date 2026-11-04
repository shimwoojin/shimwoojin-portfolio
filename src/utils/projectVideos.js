// 프로젝트의 영상 데이터를 배열로 정규화한다.
// 항목은 YouTube 영상 { id, label } 또는 자체 호스팅 영상 { src, poster, label } (src는 public/ 경로).
// 영상이 하나뿐인 기존 프로젝트의 youtubeId 필드도 그대로 지원한다.
export function getProjectVideos(project) {
  if (project.videos && project.videos.length > 0) {
    return project.videos.filter(video => video.id || video.src)
  }
  return project.youtubeId ? [{ id: project.youtubeId }] : []
}

// primary로 표시된 영상의 인덱스 (없으면 첫 번째).
// 카드 썸네일과 모달의 초기 선택 영상이 이 값을 함께 쓴다.
export function getPrimaryVideoIndex(videos) {
  const index = videos.findIndex(video => video.primary)
  return index >= 0 ? index : 0
}

export function getYoutubeThumbnail(videoId) {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
}

// 자체 호스팅 영상은 poster, YouTube 영상은 YouTube 썸네일
export function getVideoThumbnail(video) {
  if (video.src) return video.poster || null
  return getYoutubeThumbnail(video.id)
}

export const getVideoKey = (video) => video.id || video.src
