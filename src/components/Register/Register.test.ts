import { renderHook } from "@testing-library/react";
import { useLogin } from "../../hooks/useLogin";
import { ProtoUser } from "../../interfaces/UserInterfaces";

describe("Given a register function", () => {
  describe("when it call and receives a 'puski' name and '1234' as a password", () => {
    test("then it should send a post request", async () => {
      const userTest: ProtoUser = {
        userName: "pusky",
        passWord: "46581",
        image: "imagen.png",
      };

      global.fetch = jest.fn().mockReturnValue({
        json: jest.fn().mockReturnValue(userTest),
      });

      const {
        result: {
          current: { register },
        },
      } = renderHook(useLogin);

      const mockResult: ProtoUser = await register(userTest);

      expect(mockResult).toEqual(userTest);
    });
  });
});