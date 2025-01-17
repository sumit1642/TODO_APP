import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/TodoAppSlice";
import { motion, AnimatePresence } from "framer-motion";

export const TextInputSlice = () => {
	const [text, setText] = useState("");
	const [isFocused, setIsFocused] = useState(false);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.trim()) {
			dispatch(addTodo(text.trim()));
			setText("");
		}
	};

	const formVariants = {
		hidden: { opacity: 0, y: 20 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				stiffness: 400,
				damping: 30,
			},
		},
	};

	const inputVariants = {
		focused: {
			scale: 1.02,
			boxShadow: "0 0 0 2px rgba(124, 58, 237, 0.5)",
			transition: {
				type: "spring",
				stiffness: 400,
				damping: 25,
			},
		},
		unfocused: {
			scale: 1,
			boxShadow: "0 0 0 0px rgba(124, 58, 237, 0)",
			transition: {
				type: "spring",
				stiffness: 400,
				damping: 25,
			},
		},
	};

	return (
		<motion.form
			variants={formVariants}
			initial="hidden"
			animate="show"
			onSubmit={handleSubmit}
			className="w-full max-w-3xl mx-auto p-4">
			<div className="flex gap-2">
				<motion.div className="flex-1 relative">
					<motion.input
						type="text"
						value={text}
						onChange={(e) => setText(e.target.value)}
						onFocus={() => setIsFocused(true)}
						onBlur={() => setIsFocused(false)}
						placeholder="Add a new todo..."
						variants={inputVariants}
						animate={isFocused ? "focused" : "unfocused"}
						className="w-full px-4 py-2 bg-neutral-800/50 border border-neutral-700 rounded-lg 
                                text-white placeholder-neutral-400 font-mono tracking-wide
                                focus:outline-none focus:border-purple-500"
					/>
					<AnimatePresence>
						{isFocused && (
							<motion.span
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.8 }}
								className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-400 text-sm">
								Press Enter ↵
							</motion.span>
						)}
					</AnimatePresence>
				</motion.div>
				<motion.button
					type="submit"
					whileHover={{
						scale: 1.05,
						transition: { type: "spring", stiffness: 400, damping: 17 },
					}}
					whileTap={{
						scale: 0.95,
						transition: { type: "spring", stiffness: 400, damping: 17 },
					}}
					className="px-6 py-2 bg-purple-600 text-white rounded-lg font-mono tracking-wide
                            hover:bg-purple-500 focus:outline-none focus:ring-2 
                            focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-900 
                            transition-colors relative overflow-hidden group">
					<motion.span
						initial={{ y: 0 }}
						whileHover={{ y: -30 }}
						className="block">
						Add
					</motion.span>
					<motion.span
						initial={{ y: 30 }}
						whileHover={{ y: -30 }}
						className="absolute inset-0 flex items-center justify-center">
						+
					</motion.span>
				</motion.button>
			</div>
		</motion.form>
	);
};
