import { taggedSum } from "daggy";

const Remote = taggedSum("Remote", {
  NotAsked: [],
  Loading: [],
  Failure: ["error"],
  Success: ["data"]
});

//redux 라이브러리에서 toJSON() 이 호출되는것 같다.
// 그러면 자동으로 이 함수가 불려진다.
// Remote.prototype.toJSON = function() {
//   return {
//     data: {
//       __remote: this["@@values"][0] || []
//     },
//     __serializedType__: this["@@tag"]
//   };
// };

export default Remote;
