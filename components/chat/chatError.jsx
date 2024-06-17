export default function ChatError({ message }) {
	return (
		<li
			key="chatError"
			className="flex justify-center items-center w-full h-full">
			<span>{message}</span>
		</li>
	);
}

