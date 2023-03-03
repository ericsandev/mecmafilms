import { useEffect, useRef } from 'react';
import { gsap, Linear } from 'gsap';

const stylesCursor = {
	borderRadius: '100%',
	background: ' #fff',
	mixBlendMode: 'difference',
};

const stylesCursorFollower = {
	borderRadius: '100%',
	left: '-0.8rem',
	top: '-0.8rem',
	border: '1px solid rgba(#ffffff, .2)',
	background: 'rgba(#ffffff, .027)',
	transform: 'translate(5px, 5px)',
};
const Cursor = ({}) => {
	const cursor = useRef(null);
	const follower = useRef(null);

	useEffect(() => {
		if (document.body.clientWidth > 767) {
			follower.current.classList.remove('hidden');
			cursor.current.classList.remove('hidden');

			const moveCircle = (e) => {
				gsap.to(cursor.current, {
					x: e.clientX,
					y: e.clientY,
					duration: 0.1,
					ease: Linear.easeNone,
				});
				gsap.to(follower.current, {
					x: e.clientX,
					y: e.clientY,
					duration: 0.3,
					ease: Linear.easeNone,
				});
			};

			const hover = () => {
				gsap.to(cursor.current, {
					scale: 0.5,
					duration: 0.3,
				});
				gsap.to(follower.current, {
					scale: 3,
					duration: 0.3,
				});
			};

			const unHover = () => {
				gsap.to(cursor.current, {
					scale: 1,
					duration: 0.3,
				});
				gsap.to(follower.current, {
					scale: 1,
					duration: 0.3,
				});
			};

			document.addEventListener('mousemove', moveCircle);

			document.querySelectorAll('.link').forEach((el) => {
				el.addEventListener('mouseenter', hover);
				el.addEventListener('mouseleave', unHover);
			});
		}
	}, [cursor, follower]);

	return (
		<>
			<div
				ref={cursor}
				style={stylesCursor}
				className={`fixed hidden w-14 h-14 select-none pointer-events-none z-50`}></div>
			<div
				ref={follower}
				style={stylesCursorFollower}
				className={`fixed hidden w-30 h-10 select-none pointer-events-none z-50`}></div>
		</>
	);
};

export default Cursor;
