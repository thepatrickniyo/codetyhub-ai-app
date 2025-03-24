import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";

export default function SearchCourses() {
    return (
        <section className="w-full md:w-3/4 lg:w-2/4 flex flex-col md:flex-row items-center gap-4 backdrop-blur-lg p-4 rounded-lg">
            <Input
                type="text"
                placeholder="Search courses..."
                className="w-full md:w-2/4 px-4 py-6 text-white placeholder:text-white text-md bg-white/10 rounded-lg shadow-inner focus:outline-none"
            />
            <Select>
                <SelectTrigger className="w-full md:w-2/4 px-4 text-md py-6 bg-white/10 text-white rounded-lg shadow-inner focus:outline-none">
                    Select Category
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="ai">AI Agents</SelectItem>
                    <SelectItem value="react">React</SelectItem>
                    <SelectItem value="java">Java</SelectItem>
                    <SelectItem value="web-dev">Web Development</SelectItem>
                    <SelectItem value="python">Python</SelectItem>
                </SelectContent>
            </Select>
        </section>
    );
}
