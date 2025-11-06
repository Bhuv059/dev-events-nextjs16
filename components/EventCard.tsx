import Link from "next/link";
import Image from "next/image";

interface Props {
	title: string;
	image: string;
	slug: string;
	location: string;
	date: string;
	time: string;
}
const EventCard = ({title, image, slug, location, date, time}: Props) => {
	return (
		<Link href={'/events'} id="event-card">
			<div>
				<Image src={image} alt={title} width={410} height={300} className="poster" />
				<p>{location}</p>
			</div>
			<p className="title">{title}</p>
			<div className="datetime">
				<div>
					<Image src="/icons/calendar.svg" alt="date" width={24} height={14} />
					<p>{date}</p>
				</div>
				<div>
					<Image src="/icons/clock.svg" alt="date" width={24} height={14} />
					<p>{time}</p>
				</div>
			</div>

		</Link>
	)
}
export default EventCard
