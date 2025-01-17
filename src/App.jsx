import { TextInputSlice } from "./components/TextInputSlice";
import { TodoListShow } from "./components/TodoListShow";
import { motion } from "framer-motion";

function App() {
	return (
		<div className="relative min-h-screen font-mono">
			{/* Gradient Background */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
				className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
			/>

			{/* Content */}
			<div className="relative py-8">
				<div className="container mx-auto px-4">
					<motion.h1
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.5 }}
						className="text-3xl font-mono tracking-tight text-center text-white mb-8">
						Todo App
					</motion.h1>
					<TextInputSlice />
					<TodoListShow />
				</div>
			</div>
		</div>
	);
}

export default App;
