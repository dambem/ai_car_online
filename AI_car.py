# AI Car

# import the pygame module, so you can use it
import pygame

# define a main function
def main():
    screen_width = 900
    screen_height = 900
    # initialize the pygame module
    pygame.init()
    pygame.display.set_caption("minimal program")


    # create a surface on screen that has the size of 240 x 180
    screen = pygame.display.set_mode((screen_width,screen_height))

    image = pygame.transform.scale(pygame.image.load("car.png"), (100,50))
    image.set_colorkey((255,255,255))
    screen.fill((255,255,255))
    #Initial location of Car
    xpos = 50
    ypos = 50
    #amount to step through each frame
    step_x = 5
    step_y = 5

    screen.blit(image, (xpos,ypos))
    pygame.display.flip()
    # define a variable to control the main loop
    running = True

    # main loop
    while running:
        if xpos >screen_width-64 or xpos<0:
            step_x = -step_x
        if ypos >screen_width-64 or ypos<0:
            step_y = -step_y
        pygame.display.flip()
        # event handling, gets all event from the event queue
        for event in pygame.event.get():
            # only do something if the event is of type QUIT
            if event.type == pygame.QUIT:
                # change the value to False, to exit the main loop
                running = False
            if event.type == pygame.KEYDOWN:
                ypos -= step_y
            if event.type == pygame.KEYUP:
                ypos += step_y
        screen.fill((255,255,255))
        screen.blit(image, (xpos, ypos))


# run the main function only if this module is executed as the main script
# (if you import this as a module then nothing is executed)
if __name__=="__main__":
    # call the main function
    main()
