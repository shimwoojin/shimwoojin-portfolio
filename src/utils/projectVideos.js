// 프로젝트의 영상 데이터를 { id, label } 배열로 정규화한다.
// 영상이 하나뿐인 기존 프로젝트의 youtubeId 필드도 그대로 지원한다.
export function getProjectVideos(project) {
  if (project.videos && project.videos.length > 0) {
    return project.videos.filter(video => video.id)
  }
  return project.youtubeId ? [{ id: project.youtubeId }] : []
}

export function getYoutubeThumbnail(videoId) {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
}
