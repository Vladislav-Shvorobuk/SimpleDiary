package base_package.controller;

import base_package.dao.entity.Note;
import base_package.modal.ResponseMessage;
import base_package.service.SimpleDiaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class DiaryController {

    @Autowired
    SimpleDiaryService simpleDiaryService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String getDiary () {
        return "diary";
    }


    @RequestMapping(value = "/note", method = RequestMethod.POST)
    @ResponseBody
    public ResponseMessage createNote(@RequestBody Note note){
        simpleDiaryService.createNote(note.getDay(), note.getTime(), note.getNote());
        return ResponseMessage.okMessage("OK");
    }
}
