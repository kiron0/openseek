import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function About() {
  return (
    <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Search Techniques</CardTitle>
          <CardDescription>
            Use specific search terms to find open directories.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="text-muted-foreground space-y-3">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                Use specific search terms:{" "}
                <span className="font-mono text-sky-500">
                  The.Blacklist.S01
                </span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                For TV shows:{" "}
                <span className="font-mono text-sky-500">Show.Name.S01E01</span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                For music:{" "}
                <span className="font-mono text-sky-500">
                  Artist.Album.Year
                </span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                For software:{" "}
                <span className="font-mono text-sky-500">
                  Software.Name.v1.0
                </span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Combine with file type for better results</span>
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>About This Tool</CardTitle>
          <CardDescription>
            Find open directories for videos, music, books, and more.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-muted-foreground space-y-3">
          <p>
            This tool helps you find open directories on the web using advanced
            search techniques.
          </p>
          <p>
            Open directories are publicly accessible folders on web servers that
            often contain downloadable content like videos, music, books, and
            software.
          </p>
          <p>
            Please respect copyright laws and only download content you have
            rights to access.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
