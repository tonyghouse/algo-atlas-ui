import sectionInfoListJson from "../../../assets/sectionInfoList.json";
import { SectionInfo } from "@/models/SectionInfo";

import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function generateStaticParams() {
  // return [{ id: 'q-1' }, { id: 'q-2' }, { id: 'q-3' }]

  const sectionInfoList:SectionInfo[] = JSON.parse(JSON.stringify(sectionInfoListJson));
  const questionIds = sectionInfoList.flatMap(section =>
    section.questionList.map(question => ({ id: question.id}))
  );

  return questionIds;
}
 

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params
  return (
    
    <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
      <article className="prose prose-gray mx-auto max-w-6xl dark:prose-invert">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">
            Q: {id}
          </h1>
          <p className="text-gray-500 dark:text-gray-400">Reverse the order of the nodes in a singly-linked list.</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Test badge1</Badge>
            <Badge variant="secondary">Test badge2</Badge>
            <Badge variant="secondary">Test badge3</Badge>
          </div>
          <p>
            For more information, check out the
            <Link href="#">LeetCode problem</Link>.
          </p>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Notes</h2>
            <p>
              This problem can be solved using either an iterative or a recursive approach. The iterative approach
              involves using three pointers to swap the links between the nodes, while the recursive approach involves
              breaking down the problem into smaller sub-problems and combining the results.
            </p>
            <p>
              Both solutions have a time complexity of O(n), where n is the number of nodes in the linked list, and a
              space complexity of O(1) for the iterative solution and O(n) for the recursive solution (due to the call
              stack).
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}