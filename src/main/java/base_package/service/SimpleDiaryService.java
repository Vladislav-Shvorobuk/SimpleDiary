package base_package.service;

import base_package.dao.NoteDao;
import base_package.dao.entity.Note;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class SimpleDiaryService {

   @Autowired
   NoteDao noteDao;

   @Transactional
   public void createNote (String day, String time, String note) {
       noteDao.createNote(new Note(day,time,note));
   }

}
