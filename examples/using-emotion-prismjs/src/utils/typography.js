import Typography from "typography"
import bootstrapTheme from "typography-theme-bootstrap"


bootstrapTheme.googleFonts = [
  {
    name: `Source Code Pro`,
    styles: [`400`, `700`],
  },
]
const typography = new Typography(bootstrapTheme)

export default typography
