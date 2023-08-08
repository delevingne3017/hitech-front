"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Grid } from "@mui/material";

export default function HelpCenter() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Grid container spacing={"3"} bgcolor={"#f7f7f7"}>
      <Grid item xs={12} lg={3}></Grid>
      <Grid item xs={12} lg={6}></Grid>
      <Grid item xs={12} lg={3}></Grid>
      <Box
        sx={{
          marginRight: "5rem",
          marginLeft: "5rem",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.5rem",
            color: "Black",
            marginX: "32rem",
          }}
        >
          Түгээмэл асуултууд
        </Typography>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{
                width: "33%",
                flexShrink: 0,
                fontWeight: "bold",
                fontSize: ".9rem",
              }}
            >
              1. Танайх хэд хүртэл ажилладаг вэ?
            </Typography>
            <Typography sx={{ color: "text.secondary" }}></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{ fontSize: ".9rem", color: "gray", fontWeight: "bold" }}
            >
              Манайх долоо хоног бүр даваагаас ням гарагийн 10:00-20:00 цагийн
              хооронд ажилладаг.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography
              sx={{
                width: "33%",
                flexShrink: 0,
                fontWeight: "bold",
                fontSize: ".9rem",
              }}
            >
              2. Сайтаар эсвэл ФБ хуудас болон утсаар захиалахад аль нь илүү
              хурдан вэ?
            </Typography>
            <Typography sx={{ color: "text.secondary" }}></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{ fontSize: ".9rem", color: "gray", fontWeight: "bold" }}
            >
              Та өөрийн худалдан авахаар сонирхож буй бүтээгдэхүүнээ манай
              сайтаар дамжуулан захиалбал илүү хурдан, хүртээмжтэй байдаг. Учир
              нь таны захиалга автоматаар системд бүртгэгддэг ба улмаар хугацаа
              алдалгүй шуурхай гүйцэтгэх боломжтой.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography
              sx={{
                width: "33%",
                flexShrink: 0,
                fontWeight: "bold",
                fontSize: ".9rem",
              }}
            >
              3. Танай сайт дээр тавигдсан бүтээгдэхүүнүүдийн мэдээлэл үнэн, зөв
              болов уу?
            </Typography>
            <Typography sx={{ color: "text.secondary" }}></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{ fontSize: ".9rem", color: "gray", fontWeight: "bold" }}
            >
              Бид сайт дээрээ санал болгож буй тухайн бараа, бүтээгдэхүүний үнэ,
              үзүүлэлтийг үнэн зөвөөр нийтэлдэг.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography
              sx={{
                width: "33%",
                flexShrink: 0,
                fontWeight: "bold",
                fontSize: ".9rem",
              }}
            >
              4. Энэ НӨАТ орсон дүн үү?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{ fontSize: ".9rem", color: "gray", fontWeight: "bold" }}
            >
              Бараа, бүтээгдэхүүнүүдийн үнийн дүнд НӨАТ ороогүй болно. Хүсвэл та
              НӨАТ бодуулан авах боломжтой.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography
              sx={{
                width: "33%",
                flexShrink: 0,
                fontWeight: "bold",
                fontSize: ".9rem",
              }}
            >
              5. Яаж захиалах вэ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{ fontSize: ".9rem", color: "gray", fontWeight: "bold" }}
            >
              Сонирхож буй бүтээгдэхүүнээ “Худалдан авах” эсвэл “сагсанд” хийж
              “Төлбөр төлөх” товчлуур дээр дарснаар “Хүргэлтийн хэсэг” цэс
              нээгдэнэ. Энэ цэсэд өөрийн утасны дугаар болон хаяг байршлаа
              оруулаарай. Тодорхой цагт хүлээн авах бол тэмдэглэл үлдээхийг
              санал болгож байна. “Үргэлжлүүлэх” товчлуур дээр дарснаар
              “Төлбөрийн хэсэг”-рүү шилжих болно. Энэ хэсэгт төлбөрийн хэлбэрээ
              сонгох ба Бэлнээр, Шилжүүлэг болон Лизинг гэсэн сонголтууд бий.
              Ингээд “Худалдаж авах” товчлуур дээр дарснаар таны захиалга
              бүртгэгдэнэ.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography
              sx={{
                width: "33%",
                flexShrink: 0,
                fontWeight: "bold",
                fontSize: ".9rem",
              }}
            >
              6. Төлбөрөө хэрхэн хийх вэ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{ fontSize: ".9rem", color: "gray", fontWeight: "bold" }}
            >
              Төлбөрөө шилжүүлэхдээ тусгай захиалгын 4 оронтой кодыг гүйлгээний
              утга дээр бичээрэй. Ингэснээр таны захиалга саадгүй бүртгэгдэж
              хүргэлтэд гарах болно.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography
              sx={{
                width: "33%",
                flexShrink: 0,
                fontWeight: "bold",
                fontSize: ".9rem",
              }}
            >
              7. Төлбөрөө төлчихсөн гэхдээ миний захиалгын төлөв төлөгдөөгүй гэх
              юм. Одоо яах вэ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{ fontSize: ".9rem", color: "gray", fontWeight: "bold" }}
            >
              Хэрэв та захиалсан бараа, бүтээгдэхүүний төлбөрөө хүлээн авах
              дансанд 48 цагийн дотор байршуулсан бол 10 минутаас 2 цагийн дотор
              захиалгын төлөв “төлөгдсөн” гэж өөрчлөгддөг.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography
              sx={{
                width: "33%",
                flexShrink: 0,
                fontWeight: "bold",
                fontSize: ".9rem",
              }}
            >
              8. Хүргэлт бий юу?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{ fontSize: ".9rem", color: "gray", fontWeight: "bold" }}
            >
              Тийм ээ, манайх хүргэлтийн үйлчилгээ санал болгодог. Үнийн дүнгээс
              үл хамааран хот дотор 24 цагийн дотор “үнэгүй” хүргэж өгдөг эсвэл
              орон нутгийн унаанд тавьж өгөх боломжтой. Хэрэв та өөрийн
              захиалсан бараа, бүтээгдэхүүнийг ердөө л 2-хон цагийн дотор гар
              дээрээ авахыг хүсэж байгаа бол “Шуурхай” хүргэлтийг санал болгоё.
              “Шуурхай” хүргэлтийн үйлчилгээний төлбөр нь 20,000₮ ба захиалсан
              бүтээгдэхүүн дээр тань нэмэгдэхийг анхаарна уу.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel9"}
          onChange={handleChange("panel9")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography
              sx={{
                width: "33%",
                flexShrink: 0,
                fontWeight: "bold",
                fontSize: ".9rem",
              }}
            >
              9. Хүргэлт хэзээ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{ fontSize: ".9rem", color: "gray", fontWeight: "bold" }}
            >
              Захиалгын тань төлбөр бүрэн төлөгдсөн үед хүргэлтэд гардаг болохыг
              анхаарна уу. Мөн 18:00 цагаас хойш захиалсан бол маргааш хүргэгдэх
              болно. Хэрэв та өөрийн захиалгынхаа явцын талаар дэлгэрэнгүй
              мэдээлэл авахыг хүсэж байгаа бол ажлын цагаар худалдааны
              мэргэжилтэнтэй чатаар холбогдоорой. Эсвэл өөрийн холбогдох утасны
              дугаар, захиалгынхаа 4 оронтой кодоор 7000-0090 утаснаас лавлан
              тодруулах боломжтой.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Grid>
  );
}
