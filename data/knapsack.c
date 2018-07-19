#include <stdio.h>

int main(int argc, char *argv[]) 
{
  FILE *fp;
  char buff[255];



  fp = fopen("./small1.txt", "r");
  fprintf(fp, "this is testing\n");
  fputs("this is testing\n", fp);
  fclose(fp);

  printf("I thin");

  return 0;
}