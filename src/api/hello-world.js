export default function handler(req, res) {
    res.status(200).json({ hello: `world` })
  }


//   A Function file must export a single function that takes two parameters:

//   req: Node’s http request object with some automatically parsed data
//   res: Node’s http response object with some extra helper functions
//   Dynamic routing is supported for creating REST-ful APIs and other uses cases
  
//   /api/users => src/api/users/index.js
//   /api/users/23 => src/api/users/[id].js