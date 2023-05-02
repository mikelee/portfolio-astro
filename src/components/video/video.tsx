import './video.scss';

interface Props {
    video: any
}

const Video: React.FC<Props> = ({ video }) => (
    <video
        src={video}
        onMouseEnter={e => (e.target as HTMLVideoElement).play()}
        onMouseOut={e => (e.target as HTMLVideoElement).pause()}
        loop
        muted >
    </video>
);

export default Video;