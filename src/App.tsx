import { SquareArrowOutUpRight } from "lucide-react"

function App() {
	return (
		<div className="w-full h-full min-w-80">
			<div
				className="
					flex flex-col gap-4 items-center justify-end
					p-4
					min-h-[50svh]
				"
				data-theme="light"
			>
				<Top />
			</div>
			<div
				className="
					flex flex-col gap-8 items-center
					p-8
					min-h-[50svh]
				"
				data-theme="dark"
			>
				<Bottom />
			</div>
		</div>
	)
}

function Top() {
	return (
		<>
			<div className="
				border-solid border-neutral border-8 rounded-full
				w-fit
			">
					<img
					className="
						w-64 max-md:w-32
						border-solid border-white border-[12px] rounded-full
					"
					src="/quokka.png"
						alt="A happy cartoon quokka used as an avatar"
					/>
				</div>

			<h1 className="
				uppercase font-extrabold
				text-5xl max-md:text-3xl
				text-center
			">
					Jason Allan
				</h1>
			<h2 className="text-4xl max-md:text-2xl font-bold text-center">
				Web Expert
			</h2>
		</>
	)
}

function Bottom() {
	return (
		<>
			<div className="
				text-xl max-md:text-base
				font-extrabold
				text-center
			">
				Your friendly internet developer
			</div>
				<a
					href="https://cal.com/oiyouyeahyou/consultation"
				className="btn btn-primary h-auto min-h-12"
					target="_blank"
				>
					<span>Schedule A Call</span>
					<SquareArrowOutUpRight />
				</a>
		</>
	)
}

export default App
