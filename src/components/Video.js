import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  video: {
    height: '92vh',
    position: 'relative'
  }
})

const Video = React.forwardRef(({ srcVideo }) => {
  const classes = useStyles()
  return (
    <video controls className={classes.video} src={srcVideo} autoPlay={true}>
      <source
        src={srcVideo}
        type="video/mp4" />
    </video>
  )
}
)
export default Video