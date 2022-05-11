import { useState } from 'react'
import logo from '/public/logo.svg'
import './styles/main.scss'
import { Footer } from './layout/Footer'
import { Header } from './layout/Header'

export default function App() {
  return (
    <body>
      <Header />
      <main className="main">
		<section className="first-section">
				<h1 className="fi-section-title main-title">Designed for the future</h1>

  				<img className="fi-section-illustration" src="/illustration-editor-desktop.svg" alt="Illustration Editor"></img>

				<div className="fi-title-paragraph-wrapper">
					<div className="fi-title-paragraph section-a">
						<h1 className="fi-section-title lmt-width">Introducing an extensible editor</h1>
						<p className="fi-section-paragraph">Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor suppoirts management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</p>
					</div>
					<div className="fi-title-paragraph section-b">
						<h1 className="fi-section-title lmt-width">Robust content management</h1>
						<p className="fi-section-paragraph padding-bot-large">Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control.</p>
					</div>
				</div>
		
		</section>
		
		<img className="se-section-illustration" src="/illustration-phones.svg" alt=""></img>
			
		<section className="second-section">
			<div className="se-section-illustration-desktop-wrapper">
				<img className="se-section-illustration-desktop" src="/illustration-phones.svg" alt=""></img>
			</div>

			<div className="se-title-paragraph">
				<img className="se-section-illustration-pattern" src="/bg-pattern-circles.svg" alt=""></img>
				<h1 className="se-section-title">State of the Art Infrastructure</h1>
				<p className="se-section-paragraph">With reliability and speed in mind, worldwide data center provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
			</div>

		</section>

		<section className="third-section">

			<img className="th-section-illustration"src="/illustration-laptop-desktop.svg" alt=""></img>

			<div className="th-title-paragraph-wrapper">
				<div className="th-title-paragraph th-section-a">
					<h1 className="th-section-title lmt-width">Free, open, simple</h1>
					<p className="th-section-paragraph">Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlightning, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
				</div>
				
				<div className="th-title-paragraph th-section-b">
					<h1 className="th-section-title lmt-width">Powerful tooling</h1>
					<p className="th-section-paragraph padding-bot-large">Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
				</div>
			</div>
		</section>

	</main>
      <Footer />
    </body>
  )
}