/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";
import { Check, Trash2 } from "lucide-react";

export const TodoContainer = ({ children }) => (
	<motion.div
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		className="w-full max-w-3xl mx-auto p-4">
		{children}
	</motion.div>
);

export const FilterButtons = ({ filters, currentFilter, onFilterClick }) => (
	<motion.div
		className="flex justify-center gap-2 mb-6"
		initial={{ opacity: 0, y: -20 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ delay: 0.2 }}>
		{filters.map((filter) => (
			<motion.button
				key={filter}
				onClick={() => onFilterClick(filter)}
				whileTap={{ scale: 0.95 }}
				whileHover={{ scale: 1.05 }}
				transition={{ type: "spring", stiffness: 400, damping: 17 }}
				className={`px-4 py-2 rounded-lg capitalize transition-all font-mono tracking-wide
          ${
					currentFilter === filter
						? "bg-purple-600 text-white"
						: "bg-neutral-800 text-gray-300 hover:bg-neutral-700"
				}`}>
				{filter}
			</motion.button>
		))}
	</motion.div>
);

export const TodoList = ({ children }) => {
	const containerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="show"
			className="space-y-2">
			<AnimatePresence mode="popLayout">{children}</AnimatePresence>
		</motion.div>
	);
};

export const TodoItem = ({ todo, onToggle, onDelete }) => {
	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 },
	};

	return (
		<motion.div
			layout
			variants={itemVariants}
			initial={{ opacity: 0, x: -50 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: 50 }}
			className="flex items-center justify-between p-4 bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700">
			<div className="flex items-center gap-3">
				<motion.button
					whileTap={{ scale: 0.8 }}
					onClick={onToggle}
					className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
						todo.completed ? "border-purple-500 bg-purple-500" : "border-neutral-600"
					}`}>
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: todo.completed ? 1 : 0 }}
						transition={{ type: "spring", stiffness: 500, damping: 30 }}>
						<Check
							size={14}
							className="text-white"
						/>
					</motion.div>
				</motion.button>
				<motion.span
					animate={{
						color: todo.completed ? "#737373" : "#e5e5e5",
						textDecoration: todo.completed ? "line-through" : "none",
					}}
					className="font-mono tracking-wide">
					{todo.text}
				</motion.span>
			</div>
			<motion.button
				whileHover={{ scale: 1.1, color: "#ef4444" }}
				whileTap={{ scale: 0.9 }}
				onClick={onDelete}
				className="text-neutral-400 transition-colors">
				<Trash2 size={18} />
			</motion.button>
		</motion.div>
	);
};

export const EmptyTodoMessage = () => (
	<motion.div
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		className="text-center py-8 text-neutral-400 font-mono tracking-wide">
		No todos to show
	</motion.div>
);
