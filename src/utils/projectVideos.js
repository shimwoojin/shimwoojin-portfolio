// 프로젝트의 영상 데이터를 { id, label } 배열로 정규화한다.
// 영상이 하나뿐인 기존 프로젝트의 youtubeId 필드도 그대로 지원한다.
export function getProjectVideos(project) {
  if (project.videos && project.videos.length > 0) {
    return project.videos.filter(video => video.id)
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
