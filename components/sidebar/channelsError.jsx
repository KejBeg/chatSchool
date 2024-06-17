export default function ChannelsError({ message }) {
	return (
		<li className="flex border-[1px] border-black rounded w-full h-[20vh]">
			<span
				onClick={(e) => setChannelID(channel.id)}
				className="flex justify-center items-center bg-red-700 w-full h-full">
				{message}
			</span>
		</li>
	);
}

