import React from 'react'
import Header from '../CommonComponents/Header'
import Footer from '../CommonComponents/Footer'
import styled from 'styled-components'
import '../animations.css'
function Home() {
	return (
		<HomeWrapper>
			<Header />
			<Intro>
				<p>I am a front-end developer with specilization in React.js</p>
				<div className='heartbeat'>
					<a href='mailto:aksharmeetsingh21@gmail.com'>
						<p className='aksharmeet'>
							aksharmeetsingh21@gmail.com
							<img
								src='https://uploads-ssl.webflow.com/5d0f20ee6c004646f3c81f02/615bf8db0a1498233ce772d6_arrow-01.svg'
								alt='mail arrow'
								width='590'
								height='335'
							/>
						</p>
					</a>
				</div>
			</Intro>
			<Projects>
				<Project>
					<div className='bg-red'>
						<a href='https://sanity-blog-vercel.vercel.app/' target='_blank' rel='noreferrer'>
							<ImageWrapper>
								<img className='tesla-desktop position1' src='./images/SanityBlog.png' alt='sanity blog' width='590' height='335' />
							</ImageWrapper>
							<p>THE BLOG</p>
						</a>
					</div>
				</Project>

				<Project>
					<div className='bg-orange'>
						<a href='https://hopeful-murdock-c41964.netlify.app' target='_blank' rel='noreferrer'>
							<ImageWrapper>
								<img className='tesla-desktop position1' src='./images/Resturant-d.jpg' alt='resturant' width='590' height='335' />
							</ImageWrapper>
							<p>The Returant</p>
						</a>
					</div>
				</Project>
			</Projects>

			<Projects>
				<Project>
					<div className='bg-red'>
						<a href='https://netflix-63936.firebaseapp.com' target='_blank' rel='noreferrer'>
							<ImageWrapper>
								<img className='tesla-desktop position1' src='./images/Netflix-d.jpg' alt='netflix' width='590' height='335' />
							</ImageWrapper>
							<p>Netflix-clone</p>
						</a>
					</div>
				</Project>

				<Project>
					<div className='bg-red'>
						<a href='https://joyful-trifle-6e97d3.netlify.app/' target='_blank' rel='noreferrer'>
							<ImageWrapper>
								<img className='tesla-desktop position1' src='./images/mini-task.png' alt='task' width='590' height='335' />
							</ImageWrapper>
							<p>Mini Task Manager</p>
						</a>
					</div>
				</Project>
			</Projects>
			<Projects>
				<Project>
					<div className='bg-blue'>
						<a href='https://goofy-borg-ab2033.netlify.app' target='_blank' rel='noreferrer'>
							<ImageWrapper>
								<img className='tesla-desktop' src='./images/Tesla-d.jpg' alt='tesla' width='590' height='335' />
							</ImageWrapper>
							<p>Tesla Website Clone</p>
						</a>
					</div>
				</Project>
				<Project>
					<div className='bg-blue'>
						<a href='https://kaleidoscopic-puffpuff-9b5100.netlify.app/' target='_blank' rel='noreferrer'>
							<ImageWrapper>
								<img className='tesla-desktop' src='./images/LazyFetch.png' alt='lazy fetch' width='590' height='335' />
							</ImageWrapper>
							<p>Lazy Fetch</p>
						</a>
					</div>
				</Project>
			</Projects>
			<Footer />
		</HomeWrapper>
	)
}
const HomeWrapper = styled.div`
	overflow: hidden;
`
const Intro = styled.div`
	padding: 60px 40px;
	font-size: 3rem;
	font-weight: 600;

	div {
		padding-top: 40px;
		trnsition: transform 0.5s;
		p {
			display: flex;
			align-items: center;
			gap: 20px;
			font-size: 1.5rem;
			font-weight: 500;
		}
		img {
			width: 5%;
		}
		:hover {
		}
	}
	@media (min-width: 1000px) {
		font-size: 5rem;
		font-weight: 600;
		max-width: 1100px;
	}
	@media (max-width: 420px) {
		p {
			font-size: 2.8rem;
		}
	}
	@media (max-width: 380px) {
		overflow: hidden;
		padding: 20px 20px;
		img {
			display: none;
		}
		p {
			font-size: 2.3rem;
		}
	}
	@media (max-width: 370px) {
		div {
			p {
				font-size: 1.2rem;
			}
		}
	}
`
const Projects = styled.div`
	width: 100%;
	padding: 0 40px;
	text-align: center;
	@media (min-width: 1000px) {
		display: flex;
		gap: 20px;
	}
	@media (max-width: 420px) {
		padding: 0 0px;
	}
`
const Project = styled.div`
	.bg-blue,
	.bg-orange,
	.bg-red {
		padding-top: 20px;
	}
	.bg-blue {
		background-color: #87ceeb;
	}
	.bg-orange {
		background-color: rgb(255, 182, 142);
	}
	.bg-red {
		background-color: #221f1f;
		p {
			color: #fff;
			margin-top: 6px;
			margin-bottom: -5px;
		}
	}

	border-radius: 10px;
	border: 5px solid #1f1c44;
	max-width: 700px;
	margin: 0px auto 40px auto;
	.tesla-desktop {
		width: 90%;
		margin: 0 auto 5% auto;
		border-radius: 10px;
		border: 2px solid #1f1c44;
	}
	p {
		font-size: 1.5rem;
		font-family: cinzel;
		font-weight: 500;
		position: relative;
		bottom: 10px;
	}

	@media (min-width: 900px) {
		width: 100%;
	}
	@media (max-width: 420px) {
		border: 0px;
		text-align: center;
		.bg-blue {
			background-color: rgba(0, 0, 0, 0);
		}
		.bg-orange {
			background-color: rgba(0, 0, 0, 0);
		}
		.bg-red {
			background-color: rgba(0, 0, 0, 0);
			p {
				color: #000;
				margin-top: 6px;
			}
		}

		@media (max-width: 330px) {
			p {
				font-size: 1.2rem;
			}
		}
	}
`
const ImageWrapper = styled.div`
	transition: transform 0.3s;

	:hover {
		transform: Scale(1.02);
	}
`
export default Home
