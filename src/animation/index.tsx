import gsap from 'gsap'

export const startAnimation = (
  background,
  rock,
  middle,
  foreground
) => {
  gsap.from(`.${background}`, {
    delay: 4,
    duration: 3,
    opacity: 0
  })
  gsap.from(`.${rock}`, {
    delay: 4,
    duration: 3,
    opacity: 0
  })
  gsap.from(`.${middle}`, {
    delay: 4,
    duration: 3,
    opacity: 0
  })
  gsap.from(`.${foreground}`, {
    delay: 4,
    duration: 3,
    opacity: 0
  })
}