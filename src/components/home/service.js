import { Box, Grid, Typography } from "@mui/material";

export default function Service() {
  return (
    <>
      <Box bgcolor={"#F7F7F7"} paddingBottom={{ xs: "2rem", lg: "3rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4} display={"flex"} justifyContent={"center"}>
            <Box
              display={"flex"}
              justifyContent={"flex-start"}
              marginTop={"3.8rem"}
            >
              <Box
                bgcolor={"#FEDECD"}
                width={"4.5rem"}
                height={"4.5rem"}
                display={"Flex"}
                justifyContent={"center"}
                borderRadius={"1.5rem"}
              >
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0Ni41IiBoZWlnaHQ9IjQ2LjIyMyI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzhlOWFhOX0uZHtmaWxsOiNmZjk3NjB9LmZ7ZmlsbDojMjAwZTMyfTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJhIiBkPSJNMzQuNTU4IDMwLjAxTDE2LjQ4NSAxMS45NDJBOC4wMzUgOC4wMzUgMCAwMDUuOTAyIDEuMzU3bDYuODQxIDYuODQxLTQuMTMxIDQuMTMxLTYuODQxLTYuODQxYTguMDM1IDguMDM1IDAgMDAxMC41ODQgMTAuNTg0bDE4LjA3MiAxOC4wNzNhOC4wMzUgOC4wMzUgMCAwMDEwLjU4NSAxMC41ODRsLTYuODQxLTYuODQxIDQuMTMxLTQuMTMxIDYuODQxIDYuODQxQTguMDM1IDguMDM1IDAgMDAzNC41NTggMzAuMDF6Ii8+PHBhdGggZD0iTTMzLjU3OSA0MS4xMzVhOC4wMzggOC4wMzggMCAwMS0xLjY3OS04LjkxbC0xOC4wOC0xOC4wOGE4LjAzNiA4LjAzNiAwIDAxLTExLjI0Ni03Ljg3bC0uOC0uOGE4LjAzOSA4LjAzOSAwIDAwMTAuNTg1IDEwLjU4NmwxOC4wOCAxOC4wOEE4LjAzOSA4LjAzOSAwIDAwNDEuMDI4IDQ0LjczbC0xLjI1OC0xLjI1OGE4LjAxNSA4LjAxNSAwIDAxLTYuMTkxLTIuMzM3eiIgZmlsbD0iIzdjODk5YiIvPjxwYXRoIGZpbGw9IiNiNGJiYzYiIGQ9Ik0xMy4xMTYgMzUuMTY2bC0yLjA1OC0yLjA1OEwzNS4yNDMgOC45MjJsMi4wNTggMi4wNTl6Ii8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0zNy4zNyAxMC45MTNsLTIuMDYtMi4wNTggMi4wNTktNC4xMTcgNS42Ni0zLjYgMi4wNTggMi4wNTgtMy42IDUuNjZ6Ii8+PHBhdGggY2xhc3M9ImQiIGQ9Ik05Ljk0NSA0NC41MTJsLTguMjM0LTguMjM0IDEyLjM1LTEyLjM1IDguMjM0IDguMjM0eiIvPjxwYXRoIGNsYXNzPSJkIiBkPSJNOS45NDQgNDQuNTEybC01LjIzMy01LjIzMyAxMi4zNS0xMi4zNSA1LjIzMyA1LjIzM3oiLz48cGF0aCBkPSJNOS45NDYgNDQuNTEybC0yLjk4LTIuOTggMTIuMzUtMTIuMzUgMi45OCAyLjk4em0tMy4wODggMS4wM0wuNjgzIDM5LjM2N2wxLjAyOS0zLjA4NyA4LjIzNCA4LjIzM3oiIGZpbGw9IiNmZTU5MDAiLz48cGF0aCBjbGFzcz0iZCIgZD0iTTIwLjI5MyAyMy44NzhsMi4wNTggMi4wNTh2Ni4xNzVsLTguMjM0LTguMjMzeiIvPjxwYXRoIGNsYXNzPSJmIiBkPSJNNDYuMzYyIDM1Ljg1MmE4LjY5IDguNjkgMCAwMC0xMS42LTYuNTkzbC02LTZhLjY4Mi42ODIgMCAxMC0uOTY1Ljk2NWw2LjMyMyA2LjMyM2EuNjgyLjY4MiAwIDAwLjc1Ni4xNDIgNy4zMjcgNy4zMjcgMCAwMTEwIDguNjgybC02LjA1OC02LjA1OGEuNjgzLjY4MyAwIDAwLS45NjUgMGwtNC4xMTcgNC4xMTdhLjY4Mi42ODIgMCAwMDAgLjk2NWw2LjA1IDYuMDU3YTcuMzI3IDcuMzI3IDAgMDEtOC42ODItMTAgLjY4Mi42ODIgMCAwMC0uMTQyLS43NTZsLTUuNjg3LTUuNjg3YS42ODIuNjgyIDAgMTAtLjk2NS45NjVsNS4zNjcgNS4zNjdhOC42OTEgOC42OTEgMCAwMDYuNTkzIDExLjYgOC43NyA4Ljc3IDAgMDAxLjU1LjEzOCA4LjY2MiA4LjY2MiAwIDAwMy40ODItLjczMS42ODkuNjg5IDAgMDAuMjA5LTEuMTA3bC02LjMzNi02LjMzNSAzLjE1Mi0zLjE1MiA2LjMzNiA2LjMzNmEuNjg5LjY4OSAwIDAwMS4xMDctLjIwOSA4LjY3NSA4LjY3NSAwIDAwLjU5Mi01LjAyOXpNMi45NTcgMTQuODMxYTguNjkgOC42OSAwIDAwOS4yIDEuOTkybDQuNjY3IDQuNjY3YS42ODIuNjgyIDAgMDAuOTY1LS45NjVsLTQuOTg3LTQuOTg3YS42ODMuNjgzIDAgMDAtLjc1Ni0uMTQyIDcuMzI3IDcuMzI3IDAgMDEtMTAtOC42ODJsNi4wNTcgNi4wNjNhLjY4My42ODMgMCAwMC45NjUgMGw0LjExNy00LjExN2EuNjg5LjY4OSAwIDAwMC0uOTY1TDcuMTI2IDEuNjMzYTcuMzI3IDcuMzI3IDAgMDE4LjY4MiAxMCAuNjgyLjY4MiAwIDAwLjE0Mi43NTZsNS44NjMgNS44NjNhLjY4Mi42ODIgMCAxMC45NjUtLjk2NWwtNS41NDMtNS41NDNBOC42OSA4LjY5IDAgMDA1LjYxLjczYS42ODkuNjg5IDAgMDAtLjIwOSAxLjEwN2w2LjMzNiA2LjM0LTMuMTUyIDMuMTUyTDIuMjQ5IDQuOTlhLjY4OS42ODkgMCAwMC0xLjEwNy4yMDkgOC42OSA4LjY5IDAgMDAxLjgxNSA5LjYzM3oiLz48cGF0aCBjbGFzcz0iZiIgZD0iTTIzLjE3NiAyNi4wODJMMzcuNzQ4IDExLjUxbDQuMDMxLTIuMDE1YS42ODQuNjg0IDAgMDAuMjcxLS4yNDVsMy42MTQtNS42NzlhLjY4NS42ODUgMCAwMC0uMDkzLS44NTJMNDMuNTA2LjY1NGEuNjg1LjY4NSAwIDAwLS44NTItLjA5M2wtNS42NzkgMy42MTRhLjY4NS42ODUgMCAwMC0uMjQ1LjI3MWwtMi4wMTYgNC4wMzEtMTQuNjkzIDE0LjY5NGgtNS45MTJhLjY5Mi42OTIgMCAwMC0uNDg0LjJMMS4yMzMgMzUuNzYyYS42OTMuNjkzIDAgMDAtLjE2NS4yNjhsLTEuMDMzIDMuMWEuNjg1LjY4NSAwIDAwLjE2NS43bDYuMiA2LjJhLjY5MS42OTEgMCAwMC43LjE2NWwzLjEtMS4wMzJhLjY5MS42OTEgMCAwMC4yNjgtLjE2NUwyMi44NTQgMzIuNmEuNjkyLjY5MiAwIDAwLjItLjQ4NXYtNS45MzdhLjY5NC42OTQgMCAwMC4xMjItLjA5NnptLS44MDYtMS4xM2wtMS4xLTEuMSAxNC0xNCAxLjEgMS4xek05Ljk3OCA0My41MzlsLTIuMTMtMi4xMyA0Ljc1Mi00Ljc1NSAyLjIyMi0yLjIyMmEuNjg1LjY4NSAwIDAwLS45NjgtLjk2OGwtNi45NzMgNi45NzctMS4xLTEuMSAxMS40MjYtMTEuNDIgMS4xIDEuMS0yLjE5NyAyLjE5NWEuNjg1LjY4NSAwIDEwLjk2OC45NjhsMi4xOTQtMi4xOTQgMi4xMjggMi4xMjYtNi4yODYgNi4yODV6bTQuMTMtMTguNzE2bDIuMTMgMi4xM0w0LjgxNSAzOC4zNzZsLTIuMTMtMi4xM3ptMS42NTMtLjI4M2g0LjI1OWwxLjY2NCAxLjY2NHY0LjI1OXpNMzcuODcgNS4yMjhsNS4wNTYtMy4yMTdMNDQuMjE1IDMuMyA0MSA4LjM1NWwtMy41MiAxLjc2LTEuMzctMS4zNjh6TTcuMDY1IDQ0Ljc1NmwtNS42LTUuNi41NTItMS42NCA2LjY5NCA2LjY5NHoiLz48L3N2Zz4="
                  alt="{main image}"
                  style={{
                    marginTop: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "3rem",
                    height: "3rem",
                  }}
                />
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                marginTop={"1.4rem"}
                marginLeft={1}
                color={"#77798C"}
              >
                <Typography fontSize={12}>
                  НИЙТ УГСАРСАН КОМПЬЮТЕРИЙН ТОО
                </Typography>
                <Typography>10000+ </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Box
              display={"flex"}
              justifyContent={"flex-start"}
              marginTop={"3.8rem"}
            >
              <Box
                bgcolor={"#FEDECD"}
                width={"4.5rem"}
                height={"4.5rem"}
                display={"Flex"}
                justifyContent={"center"}
                borderRadius={"1.5rem"}
              >
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NCIgaGVpZ2h0PSI1NCI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2ZmOTc2MH0uYntmaWxsOiNmZTU5MDB9LmR7ZmlsbDojMjAwZTMyfTwvc3R5bGU+PC9kZWZzPjxjaXJjbGUgY2xhc3M9ImEiIGN4PSIyNi4wMzUiIGN5PSIyNi4wMzUiIHI9IjI2LjAzNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjk2NSAuOTY1KSIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNMTMuMzIyIDQwLjY3OWEyNi4wNCAyNi4wNCAwIDAxLTIuMjE1LTM0LjMgMjYuMDM2IDI2LjAzNiAwIDEwMzQuMyAzOS4wMzQgMjYuMyAyNi4zIDAgMDAyLjIxNS0yLjUxNiAyNi4wNCAyNi4wNCAwIDAxLTM0LjMtMi4yMTh6Ii8+PHBhdGggZD0iTTM5LjM3IDIyLjcwOXY0LjUxYTE3LjQ5NCAxNy40OTQgMCAwMS0yNC43MzkgMHYtNC41MWExNy40OTEgMTcuNDkxIDAgMDAyNC43MzkgMHoiIGZpbGw9IiNmZmYiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTMwLjE0OCAzNS41MjdhNS4yNzQgNS4yNzQgMCAwMTQuNjQ0IDIuNzcgMTIuMzY3IDEyLjM2NyAwIDAxLTE1LjU4MSAwIDUuMjc1IDUuMjc1IDAgMDE3Ljc5MS0xLjcyOCA1LjI0NiA1LjI0NiAwIDAxMy4xNDYtMS4wNDJ6Ii8+PHBhdGggY2xhc3M9ImIiIGQ9Ik0zOS4zNjkgMjcuMjE5djEuNDcyYTEyLjMyNSAxMi4zMjUgMCAwMS0zLjYyMyA4Ljc0NSAxMi4wODEgMTIuMDgxIDAgMDEtLjk1NS44NjFBNS4yNzYgNS4yNzYgMCAwMDI3IDM2LjU2OWE1LjI3NSA1LjI3NSAwIDAwLTcuNzkxIDEuNzI4IDEyLjMzNiAxMi4zMzYgMCAwMS00LjU3OS05LjYwNnYtMS40NzJhMTcuNDk0IDE3LjQ5NCAwIDAwMjQuNzM5IDB6Ii8+PHBhdGggY2xhc3M9ImQiIGQ9Ik0xOC4xMSAxOS40NDRhLjk2NS45NjUgMCAxMDEuOTMgMCA2LjExMyA2LjExMyAwIDAwLTEyLjIyNSAwIC45NjUuOTY1IDAgMTAxLjkzIDAgNC4xODMgNC4xODMgMCAxMTguMzY1IDB6bTIxLjk2My02LjExN2E2LjExOSA2LjExOSAwIDAwLTYuMTA5IDYuMTE3Ljk2NS45NjUgMCAxMDEuOTMgMCA0LjE4MyA0LjE4MyAwIDExOC4zNjUgMCAuOTY1Ljk2NSAwIDEwMS45MyAwIDYuMTE5IDYuMTE5IDAgMDAtNi4xMTYtNi4xMTd6bS0uMzM1IDguNDlhLjk2NS45NjUgMCAwMC0xLjA1Mi4yMDkgMTYuNTI2IDE2LjUyNiAwIDAxLTIzLjM3NCAwIC45NjUuOTY1IDAgMDAtMS42NDcuNjgydjUuOTgyYTEzLjMzNCAxMy4zMzQgMCAwMDIxLjczMSAxMC4zNTYgMTMuMzQyIDEzLjM0MiAwIDAwNC45MzUtMTAuMzU2di01Ljk4MmEuOTY1Ljk2NSAwIDAwLS41OTMtLjg5MXptLTEyLjc0MiA2Ljk4MWExOC4zMTQgMTguMzE0IDAgMDAxMS40LTMuOTQydjEuOTU1YTE2LjU0OSAxNi41NDkgMCAwMS0yMi44MDkgMHYtMS45NTZhMTguMzIgMTguMzIgMCAwMDExLjQwOSAzLjk0M3ptLTYuNDgxIDkuMjczYTQuMzA4IDQuMzA4IDAgMDE1LjktLjcyOC45NjUuOTY1IDAgMDAxLjE1MyAwIDQuMzA4IDQuMzA4IDAgMDE1LjkuNzI5IDExLjM5NCAxMS4zOTQgMCAwMS0xMi45NjMgMHptMTQuNTQzLTEuMzE2bC0uMDkuMDg4YTYuMjQzIDYuMjQzIDAgMDAtNy45NzEtMS40MzEgNi4yNDMgNi4yNDMgMCAwMC03Ljk3MiAxLjQzMiAxMS4zMzggMTEuMzM4IDAgMDEtMy40MTItNy40NjUgMTguNDkyIDE4LjQ5MiAwIDAwMjIuNzY1IDAgMTEuMzE2IDExLjMxNiAwIDAxLTMuMzE2IDcuMzc2eiIvPjxwYXRoIGNsYXNzPSJkIiBkPSJNMjcgMGEyNyAyNyAwIDEwMjcgMjdBMjcuMDMxIDI3LjAzMSAwIDAwMjcgMHptMCA1Mi4wN0EyNS4wNyAyNS4wNyAwIDExNTIuMDcgMjcgMjUuMSAyNS4xIDAgMDEyNyA1Mi4wN3oiLz48L3N2Zz4="
                  alt="{main image}"
                  style={{
                    marginTop: "0.8rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "3.2rem",
                    height: "3.2rem",
                  }}
                />
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                marginTop={"1.4rem"}
                marginLeft={1}
                color={"#77798C"}
              >
                <Typography fontSize={12}>
                  ҮЙЛЧЛҮҮЛЭГЧДИЙН МАНАЙ ДЭЛГҮҮРТ ӨГСӨН ҮНЭЛГЭЭ
                </Typography>
                <Box display={"flex"} justifyContent={"flex-start"}>
                  <Typography fontFamily={"bold"} fontSize={12}>
                    RATING 5/5{" "}
                  </Typography>
                  <Typography marginLeft={1} fontSize={12}>
                    {" "}
                    1053 санал
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Box
              display={"flex"}
              justifyContent={"flex-start"}
              marginTop={"3.8rem"}
            >
              <Box
                bgcolor={"#FEDECD"}
                width={"4.5rem"}
                height={"4.5rem"}
                display={"Flex"}
                justifyContent={"center"}
                borderRadius={"1.5rem"}
              >
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNy4zMzMiIGhlaWdodD0iNTEuODYzIj48ZGVmcz48c3R5bGU+LmN7ZmlsbDojOGU5YWE5fS5ke2ZpbGw6IzdjODk5Yn08L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMTguNjY3Ljc2YTE3LjkwNyAxNy45MDcgMCAwMTE3LjkwNyAxNy45MDdjMCAxNi4wNjUtMTcuOTA3IDMyLjQzNy0xNy45MDcgMzIuNDM3Uy43NiAzNC43MzIuNzYgMTguNjY3QTE3LjkwNyAxNy45MDcgMCAwMTE4LjY2Ny43NnoiIGZpbGw9IiNmZjk3NjAiLz48cGF0aCBkPSJNMzIuOTg5IDcuOTE4YTE5LjYwOSAxOS42MDkgMCAwMS41NTggNC42NTNjMCAxNS4zMjctMTQuOTE4IDMwLjkxLTE4LjcgMzQuNjE1IDIuMjMxIDIuNDY1IDMuODIgMy45MTggMy44MiAzLjkxOHMxNy45MDctMTYuMzcyIDE3LjkwNy0zMi40MzdhMTcuODI2IDE3LjgyNiAwIDAwLTMuNTg1LTEwLjc0OXoiIGZpbGw9IiNmZTU5MDAiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2LjM4OCA2LjM4NykiPjxwYXRoIGNsYXNzPSJjIiBkPSJNMjQuNzI0IDIxLjgzbC0yLjg5NCAyLjg5NGExLjAyMyAxLjAyMyAwIDAxLTEuNDQ3IDBsLTEuODgxLTEuODgxIDQuMzQxLTQuMzQxIDEuODgxIDEuODgxYTEuMDIzIDEuMDIzIDAgMDEwIDEuNDQ3eiIvPjxwYXRoIGNsYXNzPSJkIiBkPSJNMjQuNTc5IDIxLjk3NWwtMi42IDIuNiAzLjQ1NSAzLjQ1NWE0OC4wMTUgNDguMDE1IDAgMDAxLjc1NC0zLjQ1NXoiLz48Y2lyY2xlIGNsYXNzPSJjIiBjeD0iMTIuMjc5IiBjeT0iMTIuMjc5IiByPSIxMi4yNzkiLz48cGF0aCBjbGFzcz0iZCIgZD0iTTE5LjcwNSAyLjVhMTIuMjc5IDEyLjI3OSAwIDAxLTE3LjIgMTcuMiAxMi4yNzkgMTIuMjc5IDAgMTAxNy4yLTE3LjJ6Ii8+PC9nPjxwYXRoIGQ9Ik0xOC42NjcgMEExOC42ODggMTguNjg4IDAgMDAwIDE4LjY2N2EzMS40OTQgMzEuNDk0IDAgMDAzLjU2NCAxMy42NTkuNzYuNzYgMCAxMDEuMzY2LS42NjYgMzAuMDA4IDMwLjAwOCAwIDAxLTMuNDExLTEyLjk5MyAxNy4xNDggMTcuMTQ4IDAgMTEzNC4yOTUgMCAyOC40NSAyOC40NSAwIDAxLTIuNSAxMC45NjlMMzEuOTggMjguM2ExLjc4NSAxLjc4NSAwIDAwLS4zMjktMi4wNjZsLTEuNDU2LTEuNDU2YTEyLjk3MSAxMi45NzEgMCAwMDEuMTYzLTkuMTEzLjc2Ljc2IDAgMTAtMS40NzkuMzQ5IDExLjQ2NCAxMS40NjQgMCAxMS0xLjIxOS0zLjA4NS43Ni43NiAwIDEwMS4zMTctLjc1NyAxMy4wMjkgMTMuMDI5IDAgMTAtNS4yIDE4LjAxN2wxLjQ2MSAxLjQ2MWExLjc4NCAxLjc4NCAwIDAwMi4wNjYuMzI5bDIuNTY4IDIuNTY4YTYyLjA2NCA2Mi4wNjQgMCAwMS0zLjg0MiA1Ljg5MSA3OC45MSA3OC45MSAwIDAxLTguMzU4IDkuNjE5IDc1LjY1MSA3NS42NTEgMCAwMS0xMi4xLTE1LjMxNi43Ni43NiAwIDEwLTEuMzE2Ljc2IDc3LjI1IDc3LjI1IDAgMDAxMi45IDE2LjE2NC43Ni43NiAwIDAwMS4wMjUgMCA3OC4zMTIgNzguMzEyIDAgMDA5LjA1My0xMC4zMDUgNTcuMTMzIDU3LjEzMyAwIDAwNi4yMzgtMTAuNTM5IDMwLjI3OSAzMC4yNzkgMCAwMDIuODYzLTEyLjE1M0ExOC42ODggMTguNjg4IDAgMDAxOC42NjcgMHptOC44MjcgMzAuNjUxYS4yNjIuMjYyIDAgMDEtLjE4Ni0uMDc3bC0xLjItMS4yYTEzLjA2MiAxMy4wNjIgMCAwMDEuNzc5LTEuNDg5IDEzLjIyNyAxMy4yMjcgMCAwMDEuNDg5LTEuNzc3bDEuMiAxLjJhLjI2NC4yNjQgMCAwMTAgLjM3M2wtMi44OTYgMi44OTNhLjI2My4yNjMgMCAwMS0uMTg2LjA3N3ptMS45NDMuMzE1bDEuNTMtMS41MyAxLjY4NCAxLjY4NHEtLjQ4OSAxLjAzOS0xLjAyMSAyLjAzOXoiIGZpbGw9IiMyMDBlMzIiLz48L3N2Zz4="
                  alt="{main image}"
                  style={{
                    marginTop: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "2.3rem",
                    height: "3rem",
                  }}
                />
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                marginTop={"1.4rem"}
                marginLeft={1}
                color={"#77798C"}
              >
                <Typography fontSize={12}>
                  ДЭЛГҮҮРИЙН АЛБАН ЁСНЫ БАЙРШИЛ
                </Typography>
                <Typography fontSize={12}>
                  УБ, БАЯНБҮРД, КОМПЬЮТЕР МОЛЛ, 2020 ТООТ
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
