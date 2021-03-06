package com.mymovieplan.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mymovieplan.models.movieCard;
import com.mymovieplan.repositories.movieCardRepo;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("movieCart")
public class movieCardCotroller {

	@Autowired
	movieCardRepo mcr;
	
	@PostMapping("addCard")
	public movieCard addProduct(@RequestBody movieCard moviecard) {
		return mcr.save(moviecard);
	}
	
	@GetMapping("allCards")
	public List<movieCard> getAll()
	{
		List<movieCard> cards= (List<movieCard>) mcr.findAll();
		return cards;
	}

			// get particular Card by its ID
			@GetMapping("card/{id}")
			public Optional<movieCard> getCardById(@PathVariable int id)
			{
				return mcr.findById(id);
			}
			
			// update existing Card 
			@PutMapping("update/{id}")
			public movieCard updateCard(@RequestBody movieCard movieCard)
			{
				return mcr.save(movieCard);
			}
			
			// delete particular Card from database
			@DeleteMapping("delete/{id}")
			public void deleteCard(@PathVariable int id)
			{
				mcr.deleteById(id);
			}

	
}
