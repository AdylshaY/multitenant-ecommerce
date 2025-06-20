import { Input } from '@/components/ui/input';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from '@/components/ui/progress';

export default function Home() {
  return (
    <div className='p-4'>
      <div className='flex flex-col gap-y-4'>
        <Input />
        <Button variant={"elevated"}>
          I am a button
        </Button>
        <Textarea />
        <Checkbox />
        <Progress value={50} />
      </div>
    </div>
  );
}
